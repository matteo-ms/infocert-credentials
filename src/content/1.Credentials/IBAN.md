# IBAN

```json
{
    "@context": ["https://www.w3.org/2023/credentials/v1"],
    "type": ["VerifiableCredential", "IBAN"],
    "credentialSubject": {
        "accountId": "1234567890",
        "IBAN": "DE99123456789012345678",
        "BIC": "DEUTDEDBBER",
        "birthDate": "1958-08-17",
        "familyName": "DOE",
        "givenName": "JOHN",
        "id": "identity#IBAN"
    },
    "id": "identity#IBAN#3add94f4-28ec-42a1-8704-4e4aa51006b4",
    "issued": "2021-08-31T00:00:00Z",
    "issuer": {
        "id": "did:key:z6MkrHKzgsahxBLyNAbLQyB1pcWNYC9GmywiWPgkrvntAZcj",
        "image": {
            "id": "https://demo-wallet.infocert-labs.eu/svg/INFOCERT.svg",
            "type": "Image"
        },
        "name": "InfoCert",
        "type": "Profile",
        "url": "https://demo-wallet.infocert-labs.eu/svg/INFOCERT.svg"
    },
    "validFrom": "2021-08-31T00:00:00Z",
    "issuanceDate": "2021-08-31T00:00:00Z"
}
```

## Mapping example

```json
{
    "id": "<uuid>",
    "issuer": {
        "id": "<issuerDid>"
    },
    "credentialSubject": {
        "id": "<subjectDid>"
    },
    "issuanceDate": "<timestamp>"
}
```