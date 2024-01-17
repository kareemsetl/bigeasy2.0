'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from "~/components/Navbar";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"


const Contact = () => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <>
      <Head>
        <title>Big Easy Magazine</title>
        <meta name="description" content="All of the big easy mag content you know and love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex justify-center h-full mt-20">
        <div className="bg-purple-950 w-full h-full" style={{
          maxWidth: '1460px',
          marginTop: '275px'
        }}>
          <div className="p-5">
            <div className="bg-purple-900 text-slate-100 p-6 rounded-xl">
              <h1 className="flex justify-center text-3xl"><strong> Contact Big Easy Magazine!</strong></h1>
              <br />
              <br />            
              <br />
              <br />

              <h2 className="text-center text-lg">If you want to advertise with banner ads then contact
                us for advertising in New Orleans! To have someone contact
                you directly about advertising or to find out what our
                publication can offer you, please fill out the form below
                or submit an email.</h2>

              <Form onSubmit={form.handleSubmit(onSubmit)} {...form} className="space-y-8">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Your Email" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* Phone Number Field */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Your Phone Number" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (

                    <FormItem>
                      <FormLabel>Your Message:</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="What do you want us to know?" {...field} />
                      </FormControl>
                    </FormItem>

                  )}
                />
                <br />
                <br />
                <br />
                {/* Submit Button */}
                <Button className="bg-slate-100 text-purple-900 text-md" type="submit">Submit</Button>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
