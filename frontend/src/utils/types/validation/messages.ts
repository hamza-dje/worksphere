import {z} from "zod"

export const messageSchema = z.object({
    id: z.number().optional(),
    content : z.string().min(1, "Purpose is required").max(100, "Purpose is too long"),
    createdAt : z.date().optional(),
})

export type messageDto = z.infer<typeof messageSchema>


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