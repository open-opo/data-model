import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  Timestamp,
} from "typeorm";
import { IsDate, IsUUID } from "class-validator";

export abstract class BaseTable extends BaseEntity {
  /**
   * @ignore
   */
  constructor() {
    super();
  }

  /**
   * The generated uuid for this table
   *
   * @internal
   */
  @IsUUID()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  /**
   * The datetime when this record was added to the database
   *
   * @internal
   */
  @IsDate()
  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt: Timestamp;

  /**
   * The datetime when this record was updated
   *
   * @internal
   */
  @IsDate()
  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt?: Timestamp;
}
