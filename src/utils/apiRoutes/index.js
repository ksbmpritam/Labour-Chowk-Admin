//! Skill
export const get_skill = "api/admin/get_all_skill";
export const create_skill = "api/admin/add_skill";
export const update_skill = "api/admin/update_skill_byID";
export const delete_skill = "api/admin/delete_skill_byID";

//! Sub Skill
export const get_sub_skill = "api/admin/get_all_subSkill";
export const create_sub_skill = "api/admin/add_subSkill";
export const update_sub_skill = "api/admin/update_subskill_byID";
export const delete_sub_skill = "api/admin/delete_subskill_byID";

//! Partner
export const get_all_partner = "api/admin/get_all_labour";
export const get_active_partner = "api/admin/all_active_labour";
export const get_banned_partner = "api/admin/all_inactive_labour";
export const get_partner_by_id = "api/admin/get_labour_byID";
export const change_partner_status = "api/admin/labour_isActive";
export const change_partner_kyc_status = "api/admin/labour_kyc_isVerified";
export const update_partner = "api/admin/labour_update_byadmin";
