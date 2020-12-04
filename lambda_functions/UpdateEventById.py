import json
import psycopg2

def lambda_handler(event, context):
    conn_string = "host='calendar.cbxngq3moeaw.us-east-1.rds.amazonaws.com' dbname='postgres' user='postgres' password='password'"
    conn = psycopg2.connect(conn_string)
    with conn.cursor() as cur:
        cur.execute("UPDATE event SET name = '" + event['name'] + "', description = '" + event['description'] + "', occur_time = to_timestamp('" + event['date'] + " " + event['time'] + "', 'YYYY-MM-DD HH24:MI' ), duration = '" + event['duration'] + "' WHERE id = '" + event['pathParameters']['id'] + "'")
        conn.commit()
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        }
    }
