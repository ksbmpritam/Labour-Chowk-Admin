//! Partner
export const get_all_partner = "api/admin/get_all_labour";
export const get_active_partner = "api/admin/all_active_labour";
export const get_banned_partner = "api/admin/all_inactive_labour";
export const get_partner_by_id = "api/admin/get_labour_byID";
export const change_partner_status = "api/admin/labour_isActive";
export const change_partner_kyc_status = "api/admin/labour_kyc_isVerified";
export const update_partner = "api/admin/labour_update_byadmin";
export const delete_partner = "api/admin/delete_labour_byID";
export const get_partner_work_by_partner_id = "api/admin/get_labour_work_details"; //* Partner Work 
export const delete_partner_work_by_work_id = "api/admin/delete_work_details_by_id";
export const get_bidding_list_by_partner_id = "api/admin/get_all_bits_by_labour_Id"; //* Bidding - Single - Partner

//! Bidding 
export const get_all_bidding_list = "api/admin/get_all_bits";

//! User
export const get_all_user = "api/admin/get_user_all";
export const get_active_user = "api/admin/get_active_user_all";
export const get_banned_user = "api/admin/get_inactive_user_all";
export const get_user_by_id = "api/admin/get_user_byID";
export const change_user_status = "api/admin/user_isActive";
export const change_user_kyc_status = "api/admin/user_kyc_isVerified";
export const update_user = "api/admin/user_update_byadmin";
export const delete_user = "api/admin/delete_user_by_id";
export const get_job_list_by_user_id = "api/admin/get_all_jobs_by_user_Id"; //* Job - Single - User

//! Job
export const get_all_job_list = "api/admin/get_all_jobs";

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