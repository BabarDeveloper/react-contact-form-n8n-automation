import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming form data
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Example: https://your-instance.n8n.cloud/webhook/webhook-id
    const WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || "https://n8n.io/webhook-test/contact"

    // Prepare the payload to send to n8n
    const payload = {
      name,
      email,
      phone: phone || "Not provided",
      message,
      submittedAt: new Date().toISOString(),
    }

    console.log("[v0] Sending form data to n8n webhook:", payload)

    // Send the data to the n8n webhook
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      console.error("[v0] n8n webhook error:", response.statusText)
      throw new Error(`n8n webhook returned status ${response.status}`)
    }

    console.log("[v0] Successfully sent form data to n8n webhook")

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error in webhook route:", error)

    return NextResponse.json({ error: "Failed to process form submission" }, { status: 500 })
  }
}
