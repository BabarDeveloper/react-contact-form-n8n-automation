import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Contact Us",
  description: "Send us a message using our contact form",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Get In Touch</h1>
            <p className="text-muted-foreground">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
