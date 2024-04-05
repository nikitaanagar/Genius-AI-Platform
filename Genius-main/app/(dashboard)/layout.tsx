//to get sign in sign up which are in auth middle

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className=" h-full relative">
         <div className="hidden h-full md:flex md:w-72 md:fled-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
         
          <Sidebar/>
        
        </div>

        <main className="md:pl-72">
            <Navbar/>
            {children}
        </main>
        </div>
    );
}
export default DashboardLayout;





// hidden: This class is likely used to hide the element by default.

// h-full: Sets the height of the element to 100% of its parent container.

// md:flex: On medium-sized screens and larger (md stands for medium), the element will have a flex display, allowing it to be a flex container.

// md:w-72: On medium-sized screens and larger, the element will have a width of 72 units. The unit could be pixels, percentages, or any other unit depending on the CSS configuration.

// md:fled-col: On medium-sized screens and larger, the flex direction will be set to column, making the child elements arrange vertically.

// md:fixed: On medium-sized screens and larger, the element will be fixed in its position, meaning it will stay in a fixed location on the screen even when the user scrolls.

// md:inset-y-0: On medium-sized screens and larger, the element will have no vertical inset, meaning it will be positioned flush with the top and bottom edges of its containing element.

// z-[80]: Sets the z-index of the element to 80. The z-index determines the stacking order of elements on the page.

// bg-gray-900: Sets the background color of the element to a dark gray color (900 in the Tailwind CSS color scale).