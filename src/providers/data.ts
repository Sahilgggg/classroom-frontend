import {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";

type Subject = {
  id: number;
  name: string;
};

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
                                                           resource,
                                                         }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return {
        data: [] as unknown as TData[],
        total: 0,
      };
    }

    const data: Subject[] = [
      { id: 1, name: "Math" },
      { id: 2, name: "Physics" },
    ];

    return {
      data: data as unknown as TData[], // ✅ FIXED TS2352
      total: data.length,
    };
  },

  getOne: async () => {
    throw new Error("Not implemented");
  },

  create: async () => {
    throw new Error("Not implemented");
  },

  update: async () => {
    throw new Error("Not implemented");
  },

  deleteOne: async () => {
    throw new Error("Not implemented");
  },

  getApiUrl: () => "",
};