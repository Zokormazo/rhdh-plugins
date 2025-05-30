# SourceImport

## Properties

| Name                  | Type                                  | Description                                                                                | Notes                        |
| --------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------- |
| **id**                | **String**                            |                                                                                            | [optional] [default to null] |
| **status**            | [**ImportStatus**](ImportStatus.md)   |                                                                                            | [optional] [default to null] |
| **catalogEntityName** | **String**                            | Specified entity name in the catalog. Filled only in response for dry-run import requests. | [optional] [default to null] |
| **lastUpdate**        | **Date**                              |                                                                                            | [optional] [default to null] |
| **errors**            | **List**                              |                                                                                            | [optional] [default to null] |
| **approvalTool**      | [**ApprovalTool**](ApprovalTool.md)   |                                                                                            | [optional] [default to null] |
| **repository**        | [**Repository**](Repository.md)       |                                                                                            | [optional] [default to null] |
| **github**            | [**Import_github**](Import_github.md) |                                                                                            | [optional] [default to null] |
| **source**            | [**Source**](Source.md)               |                                                                                            | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
