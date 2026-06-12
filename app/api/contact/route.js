import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, mobile, email, message } = body;

    // Validation
    if (!name || !mobile || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid mobile number",
        },
        { status: 400 }
      );
    }

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address",
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;

    const db = client.db("giptechnologies");

    const result = await db.collection("contact_enquiries").insertOne({
      name,
      mobile,
      email,
      message,
      createdAt: new Date(),
      status: "new",
    });

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      id: result.insertedId,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}