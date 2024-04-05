
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/MobileSidebar";
import { Button }
 from "./ui/button";
const Navbar = () => {
    return (
        //create a menu icon for phone size 
        <div className="flex items-center p-4">
          
           <MobileSidebar/>
            <div className="flex w-full justify-end">
                {/* //user button use to make a button that logs out */}
            <UserButton afterSignOutUrl='/'/>
            </div>
        </div>
    );
}

export default Navbar;