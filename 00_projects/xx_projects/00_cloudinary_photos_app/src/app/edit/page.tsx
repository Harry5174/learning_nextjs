//@ts-nocheck

"use client";
import { CldImage } from "next-cloudinary";
import UploadButton from "../gallery/upload-button";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    undefined | "generative-fill" | "blur" | "grayscale" | "pixelate" | "bg-remove"
  >();

  const [pendingPrompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");

  return (
    <>
      <section>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Edit {publicId}</h1>
            <UploadButton />
          </div>

          <div className="flex gap-4">
            <Button
              variant="ghost"
              onClick={() => setTransformation(undefined)}
            >
              Clear All
            </Button>

            <div className="flex flex-col gap-4">
              <Button
                className="bg-black text-white rounded-xl"
                onClick={() => {
                  setTransformation("generative-fill");
                  setPrompt(pendingPrompt);
                }}
              >
                Apply Generative Fill
              </Button>
              <Label>Prompt</Label>
              <Input
                value={pendingPrompt}
                onChange={(e) => setPendingPrompt(e.currentTarget.value)}
              />
            </div>

            <Button
              className="bg-black text-white rounded-xl"
              onClick={() => setTransformation("blur")}
            >
              Apply Blur
            </Button>

            <Button
              className="bg-black text-white rounded-xl"
              onClick={() => setTransformation("grayscale")}
            >
              Grayscale
            </Button>

            <Button
              className="bg-black text-white rounded-xl"
              onClick={() => setTransformation("pixelate")}
            >
              Pixelate
            </Button>

            <Button
              className="bg-black text-white rounded-xl"
              onClick={() => setTransformation("bg-remove")}
            >
              Remove Background
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-12 pb-10">
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt="an image of someting"
            />
            {transformation === "generative-fill" && (
              <CldImage
                src={publicId}
                width="1800"
                height="2000"
                alt="an image of someting"
                crop="pad"
                fillBackground={{
                  prompt,
                }}
              />
            )}

            {transformation === "blur" &&
              ((
                <CldImage
                  src={publicId}
                  width="1200"
                  height="1400"
                  blur="800"
                  alt="an image of someting"
                />
              ) as any)}

            {transformation === "grayscale" && (
              <CldImage
                src={publicId}
                width="1200"
                height="1400"
                grayscale
                alt="an image of someting"
              />
            )}

            {transformation === "pixelate" && (
              <CldImage
                src={publicId}
                width="1200"
                height="1400"
                pixelate
                alt="an image of someting"
              />
            )}

              {transformation === "bg-remove" && (
                <CldImage
                  src={publicId}
                  width="1200"
                  height="1400"
                  removeBackground
                  alt="an image of someting"
                />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
