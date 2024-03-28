import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CircleDollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Product } from "@/_types/product";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  name: z.string().nonempty({
    message: "Name is required.",
  }),
  price: z.number().int().min(0, {
    message: "Price must be a non-negative integer.",
  }),
  count: z.number().int().min(0, {
    message: "Count must be a non-negative integer.",
  }),
});

// Define DialogDemo component props interface

interface DialogDemoProps {
  status: boolean;
  row: Product | null;
  onClose: () => void;
  onSave: (data: any) => void;
}

// Define DialogDemo component
export function DialogDemo({ status, row, onClose, onSave }: DialogDemoProps) {
  // Initialize react-hook-form useForm hook
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: row ? row.name : "",
      price: row ? parseFloat(row.price.toString()) : 0, // Ensure it's a number
      count: row ? parseInt(row.count.toString()) : 0, // Ensure it's a number
    },
  });

  return (
    <Dialog open={status}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>
            Make changes to this product here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) => {
                // Call onSave with form data
                onSave(data);
              })}
              className="space-y-8 flex flex-col h-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Product Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-row items-center gap-2.5">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Price" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center align-center">
                  <CircleDollarSign />
                </div>
              </div>
              <FormField
                control={form.control}
                name="count"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Count</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Count" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button type="button" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" onClick={form.handleSubmit(onSave)}>
                  Save changes
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
