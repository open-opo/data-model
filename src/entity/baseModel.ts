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
   * @category _
   */
  @PrimaryGeneratedColumn("uuid")
  id: string;

  /**
   * The datetime when this record was added to the database
   * @category _
   */
  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt: Date;

  /**
   * The datetime when this record was updated
   * @category _
   */
  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt?: Date | null;

  /**
   * This Id of the person that created this
   * @category _
   * @format uuid
   */
  @Column({ name: "createdby_id", type: "uuid", default: null })
  @IsUUID()
  createdById?: string | null;

  /**
   * This Id of the person that updated this
   * @category _
   * @format uuid
   */
  @Column({ name: "updatedby_id", type: "uuid", default: null })
  @IsUUID()
  updatedById?: string | null;

  /**
   * The referral Id from the legacy system
   * @category _
   * @format uuid
   */
  @Column({ name: "foreign_guid", type: "uuid", default: null })
  @IsUUID()
  foreignGuid?: string | null;

  /**
   * The referral Id (int) from the legacy system
   * @max_length 25
   * @format int
   * @category _
   */
  @Column({ name: "foreign_id", type: "int", default: null })
  @IsInt()
  foreignId?: number | null;
}
