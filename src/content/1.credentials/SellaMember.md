# SellaMember

```json
{
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    "type": ["VerifiableCredential", "SellaMember"],
    "credentialSubject": {
        "accountId": "1234567890",
        "Name": "Mario",
        "Surname": "Rossi",
        "birthDate": "1958-08-17",
        "function": "Finance",
        "id": "identity#SellaMember"
    },
    "id": "identity#SellaMember#3add94f4-28ec-42a1-8704-4e4aa51006b4",
    "issued": "2021-08-31T00:00:00Z",
    "issuer": {
        "id": "did:key:z7MkrHKzgsahxBLyNAbLQyB1pcWNYC9GmywiWPgkrvntAZcj",
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