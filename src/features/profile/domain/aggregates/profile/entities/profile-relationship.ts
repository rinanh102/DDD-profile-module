// import { Entity, EntityIdUtil, ValidatorUtil } from '@cbidigital/aqua';
// import {
//     ProfileAttributeValueCreateInputModel,
//     ProfileRelationshipCreateInput,
//     ProfileRelationshipCreateInputModel,
//     ProfileRelationshipCreateOutput,
// } from '../types';

// export interface ProfileRelationshipProps {
//     parentId: string;
//     childId: string;
//     typeId: string;
//     createdAt: Date;
//     //   parent: Profile;
//     //   child: Profile;
//     //   type: ProfileRelationshipType;
// }

// export class ProfileRelationship extends Entity<ProfileRelationshipProps> {
//     constructor(id?: string, props?: ProfileRelationshipProps) {
//         super(id, props);
//     }

//     public get parentId(): string {
//         return this._props.parentId;
//     }

//     public get childId(): string {
//         return this._props.childId;
//     }

//     public get typeId(): string {
//         return this._props.typeId;
//     }

//     public get createdAt(): Date {
//         return this._props.createdAt;
//     }

//     //   public get child(): Profile {
//     //     return this._props.child;
//     //   }

//     //   public get parent(): Profile {
//     //     return this._props.parent;
//     //   }

//     //   public get type(): ProfileRelationshipType {
//     //     return this._props.type;
//     //   }

//     private setParentId(payload?: string): void {
//         if (payload !== undefined) {
//             this._props.parentId = payload;
//         }
//     }

//     private setChildId(payload?: string): void {
//         if (payload !== undefined) {
//             this._props.childId = payload;
//         }
//     }
//     private setTypeId(payload?: string): void {
//         if (payload !== undefined) {
//             this._props.typeId = payload;
//         }
//     }

//     private setCreatedAt(payload?: Date): void {
//         if (payload !== undefined) {
//             this._props.createdAt = payload;
//         }
//     }

//     //   private setParent(payload?: Profile): void {
//     //     if (payload !== undefined) {
//     //       this.setParentId(payload.id);
//     //       this._props.parent = payload;
//     //     }
//     //   }

//     //   private setChild(payload?: Profile): void {
//     //     if (payload !== undefined) {
//     //       this.setChildId(payload.id)
//     //       this._props.child = payload;
//     //     }
//     //   }

//     //   private setType(payload?: ProfileRelationshipType): void {
//     //     if (payload !== undefined) {
//     //       this.setTypeId(payload.id)
//     //       this._props.type = payload;
//     //     }
//     //   }

//     public async create(payload: ProfileRelationshipCreateInput): Promise<ProfileRelationshipCreateOutput> {
//         const model = new ProfileRelationshipCreateInputModel(payload);
//         await ValidatorUtil.validateOrReject(model);

//         this.setId(EntityIdUtil.randomUUID());
//         this.setParentId(payload.parentId);
//         this.setChildId(payload.childId);
//         this.setTypeId(payload.typeId);
//         this.setCreatedAt(new Date());
//     }

//     //   public async update(payload: ProfileRelationshipUpdateInput): Promise<ProfileRelationshipUpdateOutput> {
//     //     const model = new ProfileRelationshipUpdateInputModel(payload);
//     //     await ValidatorUtils.validateOrReject(model);

//     //     if (!this.attribute.editable)
//     //         throw new AttributeValueDoesNotAllowUpdatedError()

//     //     this.setValue(payload.value);
//     //     this.setUpdatedAt(new Date());
//     //   }
// }
