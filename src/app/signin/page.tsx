
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function page() {
  return (
    <div className="flex justify-center mt-[12.5%]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Sign In for access more subjects</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex items-center space-y-1.5">
                <Label htmlFor="name" className="mr-2">
                  Name :
                </Label>
                <Input id="name" placeholder="Debnath" />
              </div>
              <div className="flex items-center space-y-1.5">
                <Label htmlFor="email" className="mr-2">
                  Email :
                </Label>
                <Input id="email" placeholder="debnath@.ai" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline">Sign In</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
