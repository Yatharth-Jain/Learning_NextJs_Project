export default function Footer() {
  return (
    <>
    <footer className="bg-gray-900 text-white py-8" id="footer">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold tracking-widest">Copyright &copy; 2021 Your Name</p>
          <div className="flex items-center">
            <a href="#" className="text-gray-400 hover:text-white mr-4">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white mr-4">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
    </>
    
  )
}
