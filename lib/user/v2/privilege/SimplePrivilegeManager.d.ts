import { PrivilegeManagerMethod } from './IPrivilegeManager';
import { IPrivilegeManager } from './IPrivilegeManager';
export declare type SimpleBasicPrivilege = 'all' | 'canCreate' | 'canDelete' | 'canWrite' | 'canSource' | 'canRead' | 'canListLocks' | 'canSetLock' | 'canGetAvailableLocks' | 'canAddChild' | 'canRemoveChild' | 'canGetChildren' | 'canSetProperty' | 'canGetProperty';
export declare abstract class SimplePrivilegeManager implements IPrivilegeManager {
    abstract canCreate: PrivilegeManagerMethod;
    abstract canDelete: PrivilegeManagerMethod;
    canMove: (ctx: any, resource: any, callback: any) => void;
    canRename: (ctx: any, resource: any, callback: any) => any;
    canAppend: (ctx: any, resource: any, callback: any) => any;
    abstract canWrite: PrivilegeManagerMethod;
    abstract canRead: PrivilegeManagerMethod;
    abstract canSource: PrivilegeManagerMethod;
    canGetMimeType: (ctx: any, resource: any, callback: any) => any;
    canGetSize: (ctx: any, resource: any, callback: any) => any;
    abstract canListLocks: PrivilegeManagerMethod;
    abstract canSetLock: PrivilegeManagerMethod;
    canRemoveLock: (ctx: any, resource: any, callback: any) => any;
    abstract canGetAvailableLocks: PrivilegeManagerMethod;
    canGetLock: (ctx: any, resource: any, callback: any) => any;
    abstract canAddChild: PrivilegeManagerMethod;
    abstract canRemoveChild: PrivilegeManagerMethod;
    abstract canGetChildren: PrivilegeManagerMethod;
    abstract canSetProperty: PrivilegeManagerMethod;
    abstract canGetProperty: PrivilegeManagerMethod;
    canGetProperties: (ctx: any, resource: any, callback: any) => any;
    canRemoveProperty: (ctx: any, resource: any, callback: any) => any;
    canGetCreationDate: (ctx: any, resource: any, callback: any) => any;
    canGetLastModifiedDate: (ctx: any, resource: any, callback: any) => any;
    canGetWebName: (ctx: any, resource: any, callback: any) => any;
    canGetType: (ctx: any, resource: any, callback: any) => any;
}