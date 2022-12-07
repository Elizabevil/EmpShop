import {UseAxios} from "../utils/AxoisUtils";
import {TargetServer} from "../utils/TargetServers";

export const DataUpload = (data: any) => UseAxios("post", TargetServer + "/", data, null)