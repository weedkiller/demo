﻿using SBISCompanyCleanseMatchBusiness.Objects.Business;
using SBISCompanyCleanseMatchBusiness.Objects.EntitiesAndAdapters;
using System.Collections.Generic;

namespace SBISCompanyCleanseMatchFacade.Objects
{
    public class ImportJobQueueFacade : FacadeParent
    {
        ImportJobQueueBusiness rep;
        public ImportJobQueueFacade(string connectionString) : base(connectionString) { rep = new ImportJobQueueBusiness(Connection); }

        public int InsertImportJobQueue(ImportJobQueueEntity obj)
        {
            return rep.InsertImportJobQueue(obj);
        }
        public List<ImportJobQueueEntity> GetImportJobSettings()
        {
            return rep.GetImportJobSettings();
        }
        public void UpdateImportDataSetting(ImportJobQueueEntity obj, bool IsPorcessStart, bool IsRevert, int RetryCount = 0, string ErrorMessage = null)
        {
            rep.UpdateImportDataSetting(obj, IsPorcessStart, IsRevert, RetryCount, ErrorMessage);
        }
        public void UpdateImportFileSentMail(ImportJobQueueEntity obj, bool IsEmailSent)
        {
            rep.UpdateImportFileSentMail(obj, IsEmailSent);
        }
        public List<ImportJobQueueEntity> GetImportJobSettingsByUserId(int? UserId, int ApplicationId, int SortOrder, int PageNumber, int PageSize, out int TotalRecords, string ProvidersType)
        {
            return rep.GetImportJobSettingsByUserId(UserId, ApplicationId, SortOrder, PageNumber, PageSize, out TotalRecords, ProvidersType);
        }

        public string ImportJobSettingNotifications(int ApplicationId, int UserId, string ProviderType)
        {
            return rep.ImportJobSettingNotifications(ApplicationId, UserId, ProviderType);
        }

        public List<ImportJobQueueEntity> UpdateImportJobSettingNotificationsStatus(int ApplicationId, int UserId)
        {
            return rep.UpdateImportJobSettingNotificationsStatus(ApplicationId, UserId);
        }
    }
}
