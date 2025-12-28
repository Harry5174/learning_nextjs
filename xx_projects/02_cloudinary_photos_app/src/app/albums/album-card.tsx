import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Folder } from "./page"
import Link from "next/link"
import { Folder as FolderIcon, ArrowRight } from "lucide-react"

export function AlbumCard({ folder }: { folder: Folder }) {
  return (
    <Card className="bg-zinc-950 border-zinc-900 overflow-hidden hover:border-zinc-700 transition-colors">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-zinc-900 rounded border border-zinc-800">
            <FolderIcon className="w-4 h-4 text-white" />
          </div>
        </div>
        <CardTitle className="text-white text-lg">{folder.name}</CardTitle>
        <CardDescription className="text-zinc-500">All your {folder.name} images</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Potential preview images could go here if available */}
      </CardContent>
      <CardFooter className="flex justify-end p-4 pt-0">
        <Button variant="outline" asChild className="border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 w-full justify-between group">
          <Link href={`/albums/${folder.name}`}>
            View Album
            <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
