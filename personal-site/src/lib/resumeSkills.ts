/**
 * Technologies named on Daniel-Smith-Resume-final.pdf (experience + open-source).
 * Used on /uses for a scannable skills matrix; update when the PDF changes.
 */
export const resumeSkillGroups = [
  {
    title: 'Languages',
    items: ['TypeScript', 'Rust', 'Go', 'Solidity'],
  },
  {
    title: 'Kubernetes & reliability',
    items: [
      'Kubernetes',
      'Helm',
      'Istio',
      'Argo CD',
      'Flux',
      'Karpenter',
      'Chaos Mesh',
      'K6',
      'PagerDuty',
    ],
  },
  {
    title: 'Cloud & data',
    items: [
      'AWS',
      'GCP',
      'IBM Cloud',
      'Cloudflare',
      'CockroachDB',
      'DragonflyDB',
      'ClickHouse',
      'Kafka',
      'SQLite',
    ],
  },
  {
    title: 'Delivery & IaC',
    items: [
      'GitHub Actions',
      'Jenkins',
      'Terraform',
      'Ansible',
      'Packer',
      'Pulumi',
      'Docker',
      'Docker Notary',
    ],
  },
  {
    title: 'Observability',
    items: [
      'Datadog',
      'Prometheus',
      'Grafana',
      'Jaeger',
      'Honeycomb',
      'CloudWatch',
      'LogDNA',
      'Sysdig',
    ],
  },
  {
    title: 'Security & identity',
    items: ['Vault', 'Twistlock', 'Wiz', 'Okta', 'Rapid7'],
  },
  {
    title: 'AI, agents & knowledge',
    items: [
      'OpenAI',
      'Onyx',
      'Apache Flink',
      'Apache Tika',
      'Gotenberg',
      'Stirling-PDF',
      'Paperless NGX',
      'OpenRouter',
      'Tavily',
    ],
  },
  {
    title: 'Blockchain & Web3',
    items: [
      'The Graph',
      'Chainlink',
      'Ethereum',
      'Polygon',
      'Slither',
      'Manticore',
      'Echidna',
      'Stellar',
    ],
  },
  {
    title: 'Protocols & integration',
    items: ['GraphQL', 'gRPC', 'Protobuf', 'MCP', 'REST', 'Streamable HTTP'],
  },
] as const
