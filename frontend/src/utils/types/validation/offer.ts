import {z} from "zod";
import { signUpSchema } from "./user";

export const offerSchema = z.object({
    id : z.number().optional(),
    service : z.string().min(3).max(255),
    description : z.string().min(10).max(1000),
    price : z.string().min(3).max(100),
    enrolledCount : z.number().min(0).optional(),
    category : z.array(z.string()).min(1),
    technologies : z.array(z.string()).min(1),
    createdAt : z.date().optional(),
    user : signUpSchema.optional(),
})
export type OfferDto = z.infer<typeof offerSchema>;


/**
 @Entity()
export class Offre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  service: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 100 })
  price: string;

  @Column({ type: 'int', default: 0 })
  enrolledCount: number;

  @Column('text', { array: true })
  category: string[];

  @Column('text', { array: true })
  technologies: string[];

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.NOTAPPROVED,
  })
  status: Status;

  @JoinColumn()
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @ManyToMany(() => User, (user) => user.enrolledOffres)
  @JoinTable()
  enroledUsers: User[];

  @ManyToOne(() => User)
  accepted: User | null;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true })
  paymentIntentId?: string;

  @Column({ nullable: true })
  freelancerStripeAccountId?: string;

  @Column({ default: false })
  clientConfirmed: boolean;

  @Column({ default: false })
  freelancerConfirmed: boolean;
}
 */