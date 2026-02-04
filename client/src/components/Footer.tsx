export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Neeraj Bansal. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-6 text-sm text-gray-600">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
