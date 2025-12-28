"use client";

import { CldImage } from "next-cloudinary";
import UploadButton from "../gallery/upload-button";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { RefreshCcw, Wand2, Image as ImageIcon, Eraser, ScanFace, Droplets } from "lucide-react";

export default function EditClient({ publicId }: { publicId: string }) {
    const [transformation, setTransformation] = useState<
        undefined | "generative-fill" | "blur" | "grayscale" | "pixelate" | "bg-remove"
    >();

    const [pendingPrompt, setPendingPrompt] = useState("");
    const [prompt, setPrompt] = useState("");

    const activeButtonStyle = "bg-white text-black hover:bg-zinc-200 border-transparent";
    const inactiveButtonStyle = "bg-black text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700";

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <div className="max-w-[1600px] mx-auto h-[calc(100vh-6rem)] flex flex-col">
                <div className="flex justify-between items-center mb-6 border-b border-zinc-900 pb-4">
                    <div>
                        <h1 className="text-xl font-light tracking-wide text-zinc-400">Editing</h1>
                        <p className="text-white font-medium text-lg truncate max-w-md">{publicId}</p>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={() => setTransformation(undefined)}
                            className="text-zinc-400 border-zinc-800 hover:bg-zinc-900 hover:text-white"
                        >
                            <RefreshCcw className="w-4 h-4 mr-2" />
                            Reset
                        </Button>
                        <UploadButton />
                    </div>
                </div>

                <div className="flex flex-1 gap-8 overflow-hidden">
                    {/* Tools Sidebar */}
                    <div className="w-80 flex flex-col gap-6 overflow-y-auto pr-2 pb-4">
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">AI Generation</h3>

                            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-950 space-y-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <Wand2 className="w-4 h-4 text-zinc-400" />
                                    <span className="text-sm font-medium">Generative Fill</span>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs text-zinc-500">Prompt</label>
                                    <Input
                                        value={pendingPrompt}
                                        onChange={(e) => setPendingPrompt(e.currentTarget.value)}
                                        placeholder="Describe what to fill..."
                                        className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-zinc-700"
                                    />
                                    <Button
                                        className={`w-full ${transformation === "generative-fill" ? activeButtonStyle : inactiveButtonStyle}`}
                                        onClick={() => {
                                            setTransformation("generative-fill");
                                            setPrompt(pendingPrompt);
                                        }}
                                    >
                                        Generate
                                    </Button>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className={`w-full justify-start ${transformation === "bg-remove" ? activeButtonStyle : inactiveButtonStyle}`}
                                onClick={() => setTransformation("bg-remove")}
                            >
                                <Eraser className="w-4 h-4 mr-2" />
                                Remove Background
                            </Button>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Filters</h3>

                            <Button
                                variant="outline"
                                className={`w-full justify-start ${transformation === "grayscale" ? activeButtonStyle : inactiveButtonStyle}`}
                                onClick={() => setTransformation("grayscale")}
                            >
                                <ImageIcon className="w-4 h-4 mr-2" />
                                Grayscale
                            </Button>

                            <Button
                                variant="outline"
                                className={`w-full justify-start ${transformation === "blur" ? activeButtonStyle : inactiveButtonStyle}`}
                                onClick={() => setTransformation("blur")}
                            >
                                <Droplets className="w-4 h-4 mr-2" />
                                Blur
                            </Button>

                            <Button
                                variant="outline"
                                className={`w-full justify-start ${transformation === "pixelate" ? activeButtonStyle : inactiveButtonStyle}`}
                                onClick={() => setTransformation("pixelate")}
                            >
                                <ScanFace className="w-4 h-4 mr-2" />
                                Pixelate
                            </Button>
                        </div>
                    </div>

                    {/* Canvas Area */}
                    <div className="flex-1 bg-zinc-950/50 rounded-xl border border-zinc-900 flex items-center justify-center p-8 overflow-auto relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl items-center justify-items-center">
                            {/* Original */}
                            <div className="relative group">
                                <div className="absolute -top-8 left-0 text-sm text-zinc-500">Original</div>
                                <CldImage
                                    src={publicId}
                                    width="600"
                                    height="600"
                                    alt="Original image"
                                    className="rounded-lg shadow-2xl shadow-black/50 border border-zinc-800"
                                />
                            </div>

                            {/* Transformed */}
                            <div className="relative">
                                <div className="absolute -top-8 left-0 text-sm text-zinc-500">Result</div>
                                {transformation === undefined && (
                                    <div className="w-[600px] h-[400px] flex items-center justify-center border-2 border-dashed border-zinc-800 rounded-lg text-zinc-600">
                                        Select a transformation to see result
                                    </div>
                                )}

                                {transformation === "generative-fill" && (
                                    <CldImage
                                        src={publicId}
                                        width="600"
                                        height="600"
                                        alt="Generative fill result"
                                        crop="pad"
                                        fillBackground={{
                                            prompt,
                                        }}
                                        className="rounded-lg shadow-2xl shadow-black/50 border border-zinc-800"
                                    />
                                )}

                                {transformation === "blur" &&
                                    ((
                                        <CldImage
                                            src={publicId}
                                            width="600"
                                            height="600"
                                            blur="800"
                                            alt="Blur result"
                                            className="rounded-lg shadow-2xl shadow-black/50 border border-zinc-800"
                                        />
                                    ) as any)}

                                {transformation === "grayscale" && (
                                    <CldImage
                                        src={publicId}
                                        width="600"
                                        height="600"
                                        grayscale
                                        alt="Grayscale result"
                                        className="rounded-lg shadow-2xl shadow-black/50 border border-zinc-800"
                                    />
                                )}

                                {transformation === "pixelate" && (
                                    <CldImage
                                        src={publicId}
                                        width="600"
                                        height="600"
                                        pixelate
                                        alt="Pixelate result"
                                        className="rounded-lg shadow-2xl shadow-black/50 border border-zinc-800"
                                    />
                                )}

                                {transformation === "bg-remove" && (
                                    <CldImage
                                        src={publicId}
                                        width="600"
                                        height="600"
                                        removeBackground
                                        alt="Background removal result"
                                        className="rounded-lg shadow-2xl shadow-black/50 border border-zinc-800"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
