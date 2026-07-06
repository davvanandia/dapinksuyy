import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-stack-md max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-headline-md text-headline-md text-primary mb-6 md:mb-0"
        >
          Davina Anandia
        </Link>

        <div className="flex gap-8 mb-6 md:mb-0">
          {['LinkedIn', 'Instagram', 'Twitter', 'Dribbble'].map((social) => (
            <Link
              key={social}
              href="#"
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4"
            >
              {social}
            </Link>
          ))}
        </div>

        <p className="font-label-caps text-label-caps text-on-surface-variant">
          © {new Date().getFullYear()} Davina Anandia. All rights reserved.
        </p>
      </div>
    </footer>
  )
}