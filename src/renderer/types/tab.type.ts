export interface Tab {
  id: number
  name: string | undefined
  type: string
  code: string
  path: string | undefined
  remote_phar_client: string | undefined
  remote_path: string | undefined
  result: string | undefined
  info: {
    name: string
    php_version: string
    version: string
  }
  docker: {
    enable: boolean
    php: string
    container_name: string
    container_id: string
    php_version: string
  }
}
