import json
import psycopg2

def lambda_handler(event, context):
    conn_string = "host='calendar.cbxngq3moeaw.us-east-1.rds.amazonaws.com' dbname='postgres' user='postgres' password='password'"
    conn = psycopg2.connect(conn_string)
    with conn.cursor() as cur:
        cur.execute("INSERT INTO attendee (app_user_id, event_id) VALUES ('" + event['pathParameters']['appUserId'] +"', '" + event['pathParameters']['eventId'] +"')")
        conn.commit()
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        }
    }
