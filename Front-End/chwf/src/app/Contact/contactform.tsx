'use client'
import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"




import styles from './contac.module.css'

const Contactform = () => {
  const { toast } = useToast()
  return (
    <>
    <div className={styles.title}>
      <Label htmlFor="title">Send Us a Message</Label>
    </div><br/>
    <div className={styles.input}>
      <Label htmlFor="Name">Name</Label> 
      <Input type="text" id="name" placeholder="Enter Your Name Please"/><br/>
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter Your Email"/><br/>
      <Label htmlFor="Subject">Subject</Label>
      <Input type="text" id="subject" placeholder="Subject"/><br/>
      <Label htmlFor="message">Message</Label>
      <Textarea placeholder="Type your message here." /><br/>
      <Button
       onClick={() => {
        toast({
          title: "Message Sent",
          description: "Thank you for taking time to reach out to us",
        })
      }}>Send</Button>
    </div>
    </>
  )
}

export default Contactform