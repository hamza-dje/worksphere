import {z} from "zod"
import { signUpSchema } from "./user"

export const notificationSchema = z.object({
    id: z.number().optional(),
    purpose : z.string().min(1, "Purpose is required").max(100, "Purpose is too long"),
    message : z.string().min(1, "Content is required").max(500, "Content is too long"),
    creator : signUpSchema.optional(),
    participant : signUpSchema.optional(),
    createdAt : z.date().optional(),
    checked : z.boolean().optional(),
})
export type notificationDto = z.infer<typeof notificationSchema>
/**
 export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  content: string;

  @JoinColumn()
  @ManyToOne(() => User)
  creator: User;

  @JoinColumn()
  @ManyToOne(() => User)
  participant: User;

  @JoinColumn()
  @ManyToOne(() => Conversation, (conversation) => conversation.messages, {
    onDelete: 'CASCADE',
  })
  conversation: Conversation;

  @CreateDateColumn()
  createdAt: Date;
}

 */