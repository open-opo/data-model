import { BaseEntity, Timestamp } from "typeorm";
export declare abstract class BaseTable extends BaseEntity {
    /**
     * @ignore
     */
    constructor();
    /**
     * The generated uuid for this table
     *
     * @internal
     */
    id: string;
    /**
     * The datetime when this record was added to the database
     *
     * @internal
     */
    createdAt: Timestamp;
    /**
     * The datetime when this record was updated
     *
     * @internal
     */
    updatedAt?: Timestamp;
}
