﻿using SBISCompanyCleanseMatchBusiness.Objects.Business;
using SBISCompanyCleanseMatchBusiness.Objects.EntitiesAndAdapters;
using System.Collections.Generic;
using System.Data;

namespace SBISCompanyCleanseMatchFacade.Objects
{
    public class iResearchFacade : FacadeParent
    {
        iResearchBusiness rep;
        public iResearchFacade(string connectionString) : base(connectionString) { rep = new iResearchBusiness(Connection); }
        public string InsertResearchInvestigation(iResearchEntity obj)
        {
            return rep.InsertResearchInvestigation(obj);
        }
        public string InsertiResearchInvestigationFailedCalls(iResearchEntity obj)
        {
            return rep.InsertiResearchInvestigationFailedCalls(obj);
        }
        public int InsertInvestigationCase(int ResearchRequestId, int CaseId, string SubjectResearchTypes, string CaseStatusResponseJSON, string CaseStatus, string LastestStatusDateTime)
        {
            return rep.InsertInvestigationCase(ResearchRequestId, CaseId, SubjectResearchTypes, CaseStatusResponseJSON, CaseStatus, LastestStatusDateTime);
        }
        public List<IResearchInvestigationEntity> GetIResearchInvestigation()
        {
            return rep.GetIResearchInvestigation();
        }
        public List<IResearchInvestigationEntity> GetFilterIResearchInvestigation(string SrcRecordId, string Status, string RequestStartDateTime, string RequestendDateTime, string Keyword)
        {
            return rep.GetFilterIResearchInvestigation(SrcRecordId, Status, RequestStartDateTime, RequestendDateTime, Keyword);
        }

        public List<DashboardV2GetInvestigationStatistics> GetDashboardV2GetInvestigationStatistics()
        {
            return rep.GetDashboardV2GetInvestigationStatistics();
        }
        public bool iResearchUpdateRequestStatus(int researchRequestId, string result)
        {
            return rep.iResearchUpdateRequestStatus(researchRequestId, result);
        }
        public IResearchInvestigationEntity iResearchInvestigationIsExists(string InputId, string SrcRecordId, string Duns)
        {
            return rep.iResearchInvestigationIsExists(InputId, SrcRecordId, Duns);
        }
        public string InsertResearchInvestigation(iResearchEntityTargetedEntity obj)
        {
            return rep.InsertResearchInvestigation(obj);
        }
        public string InsertiResearchInvestigationFailedCalls(iResearchEntityTargetedEntity obj)
        {
            return rep.InsertiResearchInvestigationFailedCalls(obj);
        }
        public List<iResearchEntityTargetedEntity> GetDnBReferenceDataBycategoryID(int categoryID)
        {
            return rep.GetDnBReferenceDataBycategoryID(categoryID);
        }

        public DataTable GetiResearchMarketApplicability(string MarketApplicability,int fulllist)
        {
            return rep.GetiResearchMarketApplicability(MarketApplicability, fulllist);
        }

        public DataTable GetiResearchInvestigationCaseLookup()
        {
            return rep.GetiResearchInvestigationCaseLookup();
        }

    }
}
