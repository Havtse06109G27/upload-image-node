import {
    Menubar,
    MenubarMenu,
    MenubarTrigger
} from "@/components/ui/menubar"

export function Menu() {
    return (
        <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
            <MenubarMenu>
                <MenubarTrigger className="font-bold">Image</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="relative">File</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}