import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";
import { IsInt, IsUUID } from "class-validator";

export class BaseModel extends BaseEntity {
  /**
   * @class
   * @ignore
   */
  constructor() {
    super();
  }

  /**
   * The Id
   */
  @PrimaryGeneratedColumn("uuid")
  id: string;

  /**
   * The datetime when this record was added to the database
   */
  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt: Date;

  /**
   * The datetime when this record was updated
   */
  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt?: Date | null;

  /**
   * This Id of the person that created this
   * @format uuid
   */
  @Column({ name: "createdby_id", type: "uuid", default: null })
  @IsUUID()
  createdById?: string | null;

  /**
   * This Id of the person that updated this
   * @format uuid
   */
  @Column({ name: "updatedby_id", type: "uuid", default: null })
  @IsUUID()
  updatedById?: string | null;

  /**
   * The referral Id from the legacy system
   * @format uuid
   */
  @Column({ name: "foreign_guid", type: "uuid", default: null })
  @IsUUID()
  foreignGuid?: string | null;

  /**
   * The referral Id (int) from the legacy system
   * @max_length 25
   * @format int
   */
  @Column({ name: "foreign_id", type: "int", default: null })
  @IsInt()
  foreignId?: number | null;
}
