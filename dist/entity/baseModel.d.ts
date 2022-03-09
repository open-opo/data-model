import { BaseEntity } from "typeorm";
export declare class BaseModel extends BaseEntity {
    /**
     * @class
     * @ignore
     */
    constructor();
    /**
     * The Id
     * @category _
     */
    id: string;
    /**
     * The datetime when this record was added to the database
     * @category _
     */
    createdAt: Date;
    /**
     * The datetime when this record was updated
     * @category _
     */
    updatedAt?: Date | null;
    /**
     * This Id of the person that created this
     * @category _
     * @format uuid
     */
    createdById?: string | null;
    /**
     * This Id of the person that updated this
     * @category _
     * @format uuid
     */
    updatedById?: string | null;
    /**
     * The referral Id from the legacy system
     * @category _
     * @format uuid
     */
    foreignGuid?: string | null;
    /**
     * The referral Id (int) from the legacy system
     * @max_length 25
     * @format int
     * @category _
     */
    foreignId?: number | null;
}
