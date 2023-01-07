import Navbar from "../components/Navbar/Navbar";

export default function aboutus() {
  return (
    <>
    <div class="flex flex-wrap justify-center items-center m-12">
      <div class="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
        <img class="w-64 rounded-full mx-auto mb-6" src="https://www.impactbnd.com/hs-fs/hubfs/blog-image-uploads/best-about-us-pages.jpg?length=1200&name=best-about-us-pages.jpg" alt="Profile picture"/>
        <h2 class="text-2xl font-bold leading-tight mb-3">Our Team</h2>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </div>
      <div class="w-full md:w-2/3">
        <h3 class="text-xl font-bold mb-3">Our Story</h3>
        <p class="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </p>
        <h3 class="text-xl font-bold mb-3">Our Values</h3>
        <ul class="list-disc pl-5 text-gray-700">
          <li>Integrity</li>
          <li>Excellence</li>
          <li>Collaboration</li>
          <li>Innovation</li>
        </ul>
      </div>
    </div>
    </>
  );
}
