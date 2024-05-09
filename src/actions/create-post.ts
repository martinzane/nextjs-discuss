"use server";

import auth from "@/auth";
import { z } from "zod";
import type { Topic } from "@prisma/client";
import db from "@/db";
import { redirect } from "next/navigation";
import paths from "@/paths";
import { revalidatePath } from "next/cache";

const schema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const result = schema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  console.log(result.success);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth.session();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to do this."],
      },
    };
  }

  return { errors: {} };
  // TODO: Revalidate topic page
}
