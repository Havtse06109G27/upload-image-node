import { Album } from "@/components/Album"
import { Menu } from "@/components/Menu"
import { Sidebar } from "@/components/Sidebar"
import { Upload } from "@/components/Upload"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const Home = () => {
    return (
        <>
            <div className="md:hidden">
                <img src="/examples/music-light.png" alt="Image" className="block dark:hidden" />
                <img src="/examples/music-dark.png" alt="Image" className="hidden dark:block" />
            </div>
            <div className="hidden md:block">
                <Menu />
                <div className="border-t">
                    <div className="bg-background">
                        <div className="grid lg:grid-cols-5">
                            <Sidebar className="hidden lg:block" />
                            <div className="col-span-3 lg:col-span-4 lg:border-l">
                                <div className="h-full px-4 py-6 lg:px-8">
                                    <Tabs defaultValue="image" className="h-full space-y-6">
                                        <div className="space-between flex items-center">
                                            <TabsList>
                                                <TabsTrigger value="image" className="relative">
                                                    Image
                                                </TabsTrigger>
                                            </TabsList>
                                            <div className="ml-auto mr-4">
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button variant="outline">Add Image</Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="sm:max-w-[425px]">
                                                        <Upload />
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </div>
                                        <TabsContent
                                            value="image"
                                            className="border-none p-0 outline-none"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <h2 className="text-2xl font-semibold tracking-tight">
                                                        List Image
                                                    </h2>
                                                    <p className="text-sm text-muted-foreground">
                                                        Display all image
                                                    </p>
                                                </div>
                                            </div>
                                            <Separator className="my-4" />
                                            <div className="relative">
                                                <ScrollArea>
                                                    <div className="flex space-x-4 pb-4">
                                                        <Album className="w-[250px]" />
                                                    </div>
                                                    <ScrollBar orientation="horizontal" />
                                                </ScrollArea>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
