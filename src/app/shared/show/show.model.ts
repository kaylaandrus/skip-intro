export class Show {
  constructor(
    public name: string,
    public source_ids: string,
    public types: string,
    public image_url: string,
    public limit?: null,
    public page?: null,
    public release_date_end?: null,
    public release_date_start?: null,
    public sort_by?: string,
    public network_ids?: string,
    public source_types?: string,
    public regions?: string
  ) {}
}
