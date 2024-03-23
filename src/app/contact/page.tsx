import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function page() {
  return (
    <div className="flex justify-center md:mt-[12.5%] mt-[50%]">
      <Card className="md:w-auto">
        <CardHeader>
          <CardTitle>Get in touch</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="my-2">
                  Email address:
                </Label>
                <Input id="name" placeholder="Enter your email" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="text-area" className="my-2">
                  How can we help?
                </Label>
                <textarea id="text-area"  name="text-area" rows={4} cols={40} placeholder="Enter your message" className="rounded-md md:border"></textarea>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
