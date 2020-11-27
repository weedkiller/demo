﻿using SBISCompanyCleanseMatchBusiness.Objects.Business;
using SBISCompanyCleanseMatchBusiness.Objects.EntitiesAndAdapters;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SBISCompanyCleanseMatchFacade.Objects
{
    public class MultiPassFacade : FacadeParent
    {
        MultiPassBusiness rep;
        public MultiPassFacade(string connectionString) : base(connectionString) { rep = new MultiPassBusiness(this.Connection); }

        public DataTable GetProviderLookups(int providerCode)
        {
            return rep.GetProviderLookups(providerCode);
        }

        public void ModifyVerificationGroup(int providerCode,string tag,string VGNamesAndLookupIds)
        {
            rep.ModifyVerificationGroup(providerCode,tag,VGNamesAndLookupIds);
        }

        public void ModifyPrecedence(int providerCode, string tag, string steps)
        {
            rep.ModifyPrecedence(providerCode, tag, steps);
        }

        public List<MPMSummary> GetMPMSummaryByTag(int providerCode,string tag)
        {
            return rep.GetMPMSummaryByTag(providerCode,tag);
        }

        public List<MultiPassGroupConfiguration> GetVerificationGroupLookupList(int providerCode, string tag)
        {
            return rep.GetVerificationGroupLookupList(providerCode, tag);
        }

        public string ModifyRule(int providerCode, string tag,string verificationGroups,string precedenceSteps,bool delete)
        {
            return rep.ModifyRule(providerCode,tag,verificationGroups,precedenceSteps,delete);
        }

        public string GetPrecedenceSteps(int providerCode, string tag)
        {
            return rep.GetPrecedenceSteps(providerCode, tag);
        }

        public DataTable GetTagsForMPM(int providerCode)
        {
            return rep.GetTagsForMPM(providerCode);
        }
    }
}
