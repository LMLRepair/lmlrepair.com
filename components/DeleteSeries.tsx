"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/TopDialog";
import { Button } from "@/components/ui/button";
import { deleteSeries } from "@/lib/db/seriesCrud";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { Trash } from "lucide-react";

const DeleteSeries = ({ seriesId }: { seriesId: number }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  async function onSubmit() {
    try {
      setLoading(true);

      await deleteSeries(seriesId);

      setLoading(false);
      setDialogOpen(false);
      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Try again.",
      });
      setLoading(false);
    }
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onSubmit} disabled={loading} variant="destructive">
            {loading ? "Loading" : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteSeries;
