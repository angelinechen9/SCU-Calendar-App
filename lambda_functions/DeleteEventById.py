import json
import psycopg2

def lambda_handler(event, context):
    conn_string = "host='calendar.cbxngq3moeaw.us-east-1.rds.amazonaws.com' dbname='postgres' user='postgres' password='password'"
    conn = psycopg2.connect(conn_string)
    with conn.cursor() as cur:
        cur.execute("DELETE FROM event WHERE id = '" + event['pathParameters']['id'] + "'")
        conn.commit()
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        }
    }
