import requests
import pandas as pd

#--------------------------------
# 1. Request data from Finnomena API
#--------------------------------

url = "https://www.finnomena.com/market-info/api/tradingview/TH/history"

params = {
    "symbol": "EASTW",
    "resolution": "1D",
    "from": 1747180800,
    "to": 1787011200,
    "countback": 330
}

response = requests.get(
    url,
    params=params,
    timeout=20,
)

#--------------------------------
# 2. HTTP Check
#--------------------------------
print("HTTP Status: ",response.status_code)
response.raise_for_status()

#--------------------------------
# 3. Parse JSON data
#--------------------------------

data = response.json()
print("API Status:", data.get("s"))

#--------------------------------
# 4. Check amount of data
#--------------------------------

print("t:", len(data["t"]))
print("o:", len(data["o"]))
print("h:", len(data["h"]))
print("l:", len(data["l"]))
print("c:", len(data["c"]))
print("v:", len(data["v"]))

#--------------------------------
# 5. Create a DataFrame
#--------------------------------

df = pd.DataFrame({
    "timestamp": data["t"],
    "open": data["o"],
    "high": data["h"],
    "low": data["l"],
    "close": data["c"],
    "volume": data["v"],
})

#--------------------------------
# 6. Convert timestamp to datetime
#--------------------------------

df["timestamp"] = pd.to_datetime(
    df["timestamp"],
    unit="s",
    utc=True
)

#--------------------------------
# 7. Convert numeric columns
#--------------------------------

numeric_columns = [
    "open",
    "high",
    "low",
    "close",
    "volume",
]

df[numeric_columns] = df[numeric_columns].astype(float)

#--------------------------------
# 8. Display the DataFrame
#--------------------------------

print()
print("DataFrame:")
print(df.head())

print()
print("DataFrame shape:")
print(df.shape)

print()
print("Data types:")
print(df.dtypes)
