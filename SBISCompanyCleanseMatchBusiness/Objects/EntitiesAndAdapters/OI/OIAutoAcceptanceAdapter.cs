﻿using SBISCompanyCleanseMatchBusiness.Objects.Helpers;
using System.Collections.Generic;
using System.Data;

namespace SBISCompanyCleanseMatchBusiness.Objects.EntitiesAndAdapters
{
    public class OIAutoAcceptanceAdapter
    {
        private DatatypeHelpers SafeHelper = new DatatypeHelpers();
        public List<OIAutoAcceptanceEntity> Adapt(DataTable dt)
        {
            List<OIAutoAcceptanceEntity> results = new List<OIAutoAcceptanceEntity>();
            foreach (DataRow rw in dt.Rows)
            {
                OIAutoAcceptanceEntity cust = new OIAutoAcceptanceEntity();
                cust = AdaptItem(rw);
                results.Add(cust);
            }
            return results;
        }
        public OIAutoAcceptanceEntity AdaptItem(DataRow rw)
        {
            OIAutoAcceptanceEntity result = new OIAutoAcceptanceEntity();
            if (rw.Table.Columns["RuleId"] != null)
            {
                result.RuleId = SafeHelper.GetSafeint(rw["RuleId"]);
            }

            if (rw.Table.Columns["ConfidenceCodeMin"] != null)
            {
                result.ConfidenceCodeMin = SafeHelper.GetSafeint(rw["ConfidenceCodeMin"]);
            }

            if (rw.Table.Columns["ConfidenceCodeMax"] != null)
            {
                result.ConfidenceCodeMax = SafeHelper.GetSafeint(rw["ConfidenceCodeMax"]);
            }

            if (rw.Table.Columns["MG_Company"] != null)
            {
                result.MG_Company = SafeHelper.GetSafestring(rw["MG_Company"]);
            }

            if (rw.Table.Columns["MG_StreetNo"] != null)
            {
                result.MG_StreetNo = SafeHelper.GetSafestring(rw["MG_StreetNo"]);
            }

            if (rw.Table.Columns["MG_StreetName"] != null)
            {
                result.MG_StreetName = SafeHelper.GetSafestring(rw["MG_StreetName"]);
            }

            if (rw.Table.Columns["MG_City"] != null)
            {
                result.MG_City = SafeHelper.GetSafestring(rw["MG_City"]);
            }

            if (rw.Table.Columns["MG_State"] != null)
            {
                result.MG_State = SafeHelper.GetSafestring(rw["MG_State"]);
            }

            if (rw.Table.Columns["MG_PostalCode"] != null)
            {
                result.MG_PostalCode = SafeHelper.GetSafestring(rw["MG_PostalCode"]);
            }

            if (rw.Table.Columns["MG_Phone"] != null)
            {
                result.MG_Phone = SafeHelper.GetSafestring(rw["MG_Phone"]);
            }

            if (rw.Table.Columns["MG_Webdomain"] != null)
            {
                result.MG_Webdomain = SafeHelper.GetSafestring(rw["MG_Webdomain"]);
            }

            if (rw.Table.Columns["MG_Country"] != null)
            {
                result.MG_Country = SafeHelper.GetSafestring(rw["MG_Country"]);
            }

            if (rw.Table.Columns["MG_EIN"] != null)
            {
                result.MG_EIN = SafeHelper.GetSafestring(rw["MG_EIN"]);
            }

            if (rw.Table.Columns["MDP_Company"] != null)
            {
                result.MDP_Company = SafeHelper.GetSafestring(rw["MDP_Company"]);
            }

            if (rw.Table.Columns["MDP_Webdomain"] != null)
            {
                result.MDP_Webdomain = SafeHelper.GetSafestring(rw["MDP_Webdomain"]);
            }

            if (rw.Table.Columns["Score_Company"] != null)
            {
                result.Score_Company = SafeHelper.GetSafeint(rw["Score_Company"]);
            }

            if (rw.Table.Columns["Score_StreetName"] != null)
            {
                result.Score_StreetName = SafeHelper.GetSafeint(rw["Score_StreetName"]);
            }

            if (rw.Table.Columns["Tags"] != null)
            {
                result.Tags = SafeHelper.GetSafestring(rw["Tags"]);
            }

            if (rw.Table.Columns["CountryGroupId"] != null)
            {
                result.CountryGroupId = SafeHelper.GetSafeint(rw["CountryGroupId"]);
            }

            if (rw.Table.Columns["AcceptActiveOnly"] != null)
            {
                result.AcceptActiveOnly = SafeHelper.GetSafebool(rw["AcceptActiveOnly"]);
            }

            if (rw.Table.Columns["PreferLinkedRecord"] != null)
            {
                result.PreferLinkedRecord = SafeHelper.GetSafebool(rw["PreferLinkedRecord"]);
            }

            if (rw.Table.Columns["ExcludeFromAutoAccept"] != null)
            {
                result.ExcludeFromAutoAccept = SafeHelper.GetSafebool(rw["ExcludeFromAutoAccept"]);
            }

            if (rw.Table.Columns["UserId"] != null)
            {
                result.UserId = SafeHelper.GetSafeint(rw["UserId"]);
            }

            if (rw.Table.Columns["StartTime"] != null)
            {
                result.StartTime = SafeHelper.GetSafeDateTime(rw["StartTime"]);
            }

            if (rw.Table.Columns["EndTime"] != null)
            {
                result.EndTime = SafeHelper.GetSafeDateTime(rw["EndTime"]);
            }

            if (rw.Table.Columns["GroupName"] != null)
            {
                result.GroupName = SafeHelper.GetSafestring(rw["GroupName"]);
            }

            return result;
        }
    }
}