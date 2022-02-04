import { BaseEntity } from "typeorm";
export declare class BaseModel extends BaseEntity {
    /**
     * @class
     * @ignore
     */
    constructor();
    /**
     * The Id
     */
    id: string;
    /**
     * The datetime when this record was added to the database
     */
    createdAt: Date;
    /**
     * The datetime when this record was updated
     */
    updatedAt?: Date | null;
    /**
     * This Id of the person that created this
     * @format uuid
     */
    createdById?: string | null;
    /**
     * This Id of the person that updated this
     * @format uuid
     */
    updatedById?: string | null;
    /**
     * The referral Id from the legacy system
     * @format uuid
     */
    foreignGuid?: string | null;
    /**
     * The referral Id (int) from the legacy system
     * @max_length 25
     * @format int
     */
    foreignId?: number | null;
}
