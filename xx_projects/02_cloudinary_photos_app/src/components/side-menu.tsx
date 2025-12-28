import cloudinary from "@/lib/cloudinary";
import { Button } from "@/components/ui/button";
import { Heart, LayoutGrid, Image as ImageIcon, Folder, Settings } from "lucide-react";
import Link from "next/link";

interface FolderType {
    name: string;
    path: string;
}

export async function SideMenu() {
    const { folders } = (await cloudinary.api.root_folders()) as {
        folders: FolderType[];
    };

    return (
        <div className="w-72 h-screen bg-black border-r border-zinc-900 flex flex-col sticky top-0">

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto py-8">

                {/* Main Navigation */}
                <div className="px-6 mb-10">
                    <h2 className="mb-4 px-3 text-xs font-medium text-zinc-500 uppercase tracking-widest">
                        Library
                    </h2>
                    <div className="space-y-1">
                        <Button
                            asChild
                            variant="ghost"
                            className="w-full justify-start h-10 px-3 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all duration-200 group"
                        >
                            <Link href="/gallery" className="flex items-center gap-3">
                                <ImageIcon className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                                <span className="font-medium">All Photos</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="ghost"
                            className="w-full justify-start h-10 px-3 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all duration-200 group"
                        >
                            <Link href="/albums" className="flex items-center gap-3">
                                <LayoutGrid className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                                <span className="font-medium">Albums</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="ghost"
                            className="w-full justify-start h-10 px-3 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all duration-200 group"
                        >
                            <Link href="/favorites" className="flex items-center gap-3">
                                <Heart className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                                <span className="font-medium">Favorites</span>
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Folders Section */}
                <div className="px-6">
                    <div className="flex items-center justify-between px-3 mb-4">
                        <h2 className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                            Folders
                        </h2>
                        <span className="text-[10px] text-zinc-600 bg-zinc-900 px-1.5 py-0.5 rounded-full">{folders.length}</span>
                    </div>

                    <div className="space-y-1">
                        {folders.map((folder) => (
                            <Button
                                asChild
                                key={folder.name}
                                variant="ghost"
                                className="w-full justify-start h-9 px-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all duration-200 group"
                            >
                                <Link href={`/albums/${folder.path}`} className="flex items-center gap-3">
                                    <Folder className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                                    <span className="truncate">{folder.name}</span>
                                </Link>
                            </Button>
                        ))}

                        {folders.length === 0 && (
                            <div className="px-3 py-4 text-xs text-zinc-600 italic">
                                No folders found
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer / Settings */}
            <div className="p-6 border-t border-zinc-900">
                <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start h-10 px-3 text-zinc-500 hover:text-white hover:bg-zinc-900 transition-all duration-200 group"
                >
                    <Link href="#" className="flex items-center gap-3">
                        <Settings className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                        <span className="font-medium">Settings</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
