﻿using SBISCompanyCleanseMatchBusiness.Objects.EntitiesAndAdapters;
using SBISCompanyCleanseMatchBusiness.Objects.Repositories;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace SBISCompanyCleanseMatchBusiness.Objects.Business
{
    public class MatchBusiness : BusinessParent
    {
        MatchRepository match;
        public MatchBusiness(string connectionString) : base(connectionString) { match = new MatchRepository(Connection); }
        public List<MDPCodeEntity> GetMDPCodes()
        {
            List<MDPCodeEntity> results = new List<MDPCodeEntity>();
            results = match.GetMDPCodes();

            return results;
        }
        public List<MatchCodeEntity> GetMDPValues()
        {
            List<MatchCodeEntity> results = new List<MatchCodeEntity>();
            results = match.GetMDPValues();

            return results;
        }
        public void AddCompanyRecord(MatchEntity Match, int UserId)
        {
            match.AddCompanyRecord(Match, UserId);
        }
        public string EncodeURL(string value)
        {
            return match.EncodeURL(value);
        }
        // Validate SrcId for checking duplicate records at "Add Match as a new Company".
        public bool ValidateCompanySrcId(string SrcRecordId)
        {
            try
            {
                bool result = match.ValidateCompanySrcId(SrcRecordId);
                return result;
            }
            catch (SqlException)
            {
                throw;
            }
        }
    }
}